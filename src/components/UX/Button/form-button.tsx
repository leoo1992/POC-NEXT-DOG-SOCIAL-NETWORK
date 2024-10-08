import { useFormStatus } from "react-dom";
import Button from ".";


export default function FormButton({ text, loading }: { text: string;  loading: string }) {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button disabled>{loading}</Button>
        ) : (
          <Button>{text}</Button>
        )}
      </>
    );
  }