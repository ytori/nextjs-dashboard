import clsx from 'clsx';

export default function FormError({
  id,
  errors,
  className,
}: {
  id?: string;
  errors?: string[] | string | null;
  className?: string;
}) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors &&
        (Array.isArray(errors) ? errors : [errors]).map((error: string) => (
          <p className={clsx('text-sm text-red-500', className)} key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
