export function TeamMemberPlaceholder({ className }: { className: string }) {
  return (
    <span aria-hidden="true" className={className}>
      <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64">
        <path
          d="M32 7 53 54c-8-2-14 0-18 5h-6c-4-5-10-7-18-5L32 7Zm0 12L19 48c5 0 10 2 13 6 3-4 8-6 13-6L32 19Zm0 10 7 17c-3 1-5 2-7 5-2-3-4-4-7-5l7-17Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
}
