'use client'

import { useForm } from 'react-hook-form';
import { question } from '@/constants/question';
import styles from './Question.module.scss';

interface FormInputsType {
    'user-name': string;
    'user-phone': string;
    'user-email': string;
}

export default function QuestionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<FormInputsType>({
        mode: 'onChange'
    });

    const onSubmit = (data: FormInputsType) => {
        console.log('Submitted Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.fieldsContainer}>
                {question.form.map((input) => {
                    const inputName = input.name as keyof FormInputsType;
                    const isError = !!errors[inputName];
                    const isValidated = dirtyFields[inputName] && !isError;

                    return (
                        <div key={input.id} className={styles.inputWrapper}>
                            <label htmlFor={input.id} className={styles.label}>
                                {input.label}
                            </label>
                            <div className={styles.fieldWrapper}>
                                <input
                                    id={input.id}
                                    type={input.id === 'email' ? 'email' : 'text'}
                                    placeholder={input.placeholder}
                                    {...register(inputName, {
                                        required: input.required ? 'Please fill out this field.' : false,
                                        pattern: input.regEx ? {
                                            value: input.regEx,
                                            message: `Please enter an email address.`
                                        } : undefined
                                    })}
                                    className={`${styles.input} ${isError ? styles.inputError : ''} ${isValidated ? styles.inputSuccess : ''}`}
                                />
                                {isError && (
                                    <span className={styles.errorMessage}>
                                        {errors[inputName]?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <button type="submit" className={styles.submitBtn} />
        </form>
    );
}
