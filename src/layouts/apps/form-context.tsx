// FormContext.tsx
import { ReactNode, createContext, useContext, useState } from 'react';
import { AppTypeEditable } from "src/types/app";

interface FormContextType {
    formData:  AppTypeEditable;
    updateFormData: (newData: AppTypeEditable) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

interface FormProviderProps {
    children: ReactNode;
    app: AppTypeEditable;
}

export const FormProvider = ({ children, app }: FormProviderProps) => {
    const [formData, setFormData] = useState(app);

    const updateFormData = (newData: AppTypeEditable) => {
        setFormData({ ...formData, ...newData });
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {formData ?
                children
                :
                <div className='w-full p-10 text-center text-xl text-red-600'>
                    <p>Something went wrong</p>
                    <p>Please try again later</p>
                </div>
            }
        </FormContext.Provider>
    );
};
