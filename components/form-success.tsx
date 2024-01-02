import { CheckCircleIcon } from "lucide-react"

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-emerald-500/15 rounded-md px-4 py-3 flex items-center gap-x-2 text-sm text-emerald-600">
            <CheckCircleIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    );
};