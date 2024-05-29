'use client';

import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../store/popupSlice';
import { RootState, AppDispatch } from '../../store/store';
import {updateField, setError, clearForm, FormState} from '../../store/formSlice';
import styles from './PopupForm.module.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PopupForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const show = useSelector((state: RootState) => state.popup.isVisible);
    const form = useSelector((state: RootState) => state.form);
    const [step, setStep] = useState(1);

    if (!show) {
        return null;
    }

    const requiredFields = ['name', 'email', 'project', 'budget'];
    const fields = ['name', 'email', 'social', 'project', 'budget', 'done'];

    const handleNext = () => {
        const currentField = fields[step - 1] as keyof typeof form;
        if (requiredFields.includes(currentField as string) && form[currentField] === '') {
            dispatch(setError({ field: currentField, message: `Please fill in the required field` }));
            return;
        }

        if (currentField === 'email' && !validateEmail(form.email)) {
            dispatch(setError({ field: 'email', message: 'Please enter a valid email address' }));
            return;
        }

        setStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
    };


    const handlePrevious = () => {
        setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    };

    const handleClose = () => {
        dispatch(hidePopup());
        setStep(1); // Reset to the first step when closing
        dispatch(clearForm());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ field: name as keyof FormState, value }));
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const variants = {
        hidden: { opacity: 0, x: -100 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={handleClose}>Exit</button>
                <AnimatePresence mode={"wait"}>
                    {step === 1 && (
                        <motion.div key="step1" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>Hey! What&apos;s your name?<span className={styles.asterisk}>*</span></h2>
                            <p className={styles.subtitle}>First and last name.</p>
                            <input
                                className={styles.input}
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {form.errors.name && <p className={styles.error}>{form.errors.name}</p>}
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleNext}>Next</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div key="step2" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>Good stuff! What&apos;s your email?<span
                                className={styles.asterisk}>*</span></h2>
                            <p className={styles.subtitle}>Email address I can contact you with.</p>
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {form.errors.email && <p className={styles.error}>{form.errors.email}</p>}
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleNext}>Next</button>
                                <button className={styles.button} onClick={handlePrevious}>Back</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div key="step3" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>Thanks for the email! Any other ways I can contact you?</h2>
                            <p className={styles.subtitle}>Handles or links of your preferred social media(s).</p>
                            <input
                                className={styles.input}
                                type="text"
                                name="social"
                                value={form.social}
                                onChange={handleChange}
                            />
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleNext}>Next</button>
                                <button className={styles.button} onClick={handlePrevious}>Back</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div key="step4" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>Now that we know each other, let&apos;s talk business!</h2>
                            <p className={styles.subtitle}>Tell me all about your project and what you&apos;re looking
                                for, you can provide links if needed.<span className={styles.asterisk}>*</span></p>
                            <textarea
                                className={styles.textarea}
                                rows={6}
                                name="project"
                                value={form.project}
                                onChange={handleChange}
                            />
                            {form.errors.project && <p className={styles.error}>{form.errors.project}</p>}
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleNext}>Next</button>
                                <button className={styles.button} onClick={handlePrevious}>Back</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 5 && (
                        <motion.div key="step5" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>What&apos;s our budget looking like?*</h2>
                            <p className={styles.subtitle}>Pick the option closest to what you&apos;re willing to
                                pay.<span className={styles.asterisk}>*</span></p>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        className={styles.radioInput}
                                        type="radio"
                                        name="budget"
                                        value="Less than €1,000"
                                        checked={form.budget === "Less than €1,000"}
                                        onChange={handleChange}
                                    /> Less than €1,000
                                </label><br />
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="budget"
                                        value="€1,000 - €5,000"
                                        checked={form.budget === "€1,000 - €5,000"}
                                        onChange={handleChange}
                                    /> €1,000 - €5,000
                                </label><br />
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="budget"
                                        value="€5,000 - €30,000"
                                        checked={form.budget === "€5,000 - €30,000"}
                                        onChange={handleChange}
                                    /> €5,000 - €30,000
                                </label><br />
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="budget"
                                        value="€30,000 - €100,000"
                                        checked={form.budget === "€30,000 - €100,000"}
                                        onChange={handleChange}
                                    /> €30,000 - €100,000
                                </label><br />
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="budget"
                                        value="€100,000+"
                                        checked={form.budget === "€100,000+"}
                                        onChange={handleChange}
                                    /> €100,000+
                                </label><br />
                            </div>
                            {form.errors.budget && <p className={styles.error}>{form.errors.budget}</p>}
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleNext}>Next</button>
                                <button className={styles.button} onClick={handlePrevious}>Back</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 6 && (
                        <motion.div key="step6" className={styles.formStep} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
                            <h2 className={styles.title}>Thank you for your response!</h2>
                            <p className={styles.subtitle}>I will reach out to you shortly for further discussion about making your vision a reality.</p>
                            <div className={styles.navButtonRow}>
                                <button className={styles.button} onClick={handleClose}>Close</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PopupForm;
