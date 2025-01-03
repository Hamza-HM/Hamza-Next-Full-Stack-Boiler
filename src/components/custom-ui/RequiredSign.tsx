export const RequiredSign = ({
  required,
}: {
  required?: boolean | undefined;
}) => {
  return required ? (
    <span className="font-medium text-destructive"> *</span>
  ) : null;
};
