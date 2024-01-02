import { AlertTriangleIcon } from "lucide-react"

interface FormErrorProps {
    message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 rounded-md px-4 py-3 flex items-center gap-x-2 text-sm text-destructive">
            <div>
                <AlertTriangleIcon className="w-4 h-4" />
            </div>
            <p>{message}</p>
        </div>
    );
};