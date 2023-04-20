import clsx from 'clsx';

export default function Button() {
  return (
    <div
      className={clsx(
        'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none horver: opacity-80'
      )}
    >
      Button
    </div>
  );
}
