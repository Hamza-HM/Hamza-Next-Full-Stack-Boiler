export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex w-full md:w-1/2">
      <div className="flex w-full items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
