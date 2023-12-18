import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="items-center justify-center flex">
      <SignUp />
    </div>
  );
}