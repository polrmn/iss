import React from 'react'

export default function MailIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={0.717}
                d="M23.63 18.939a.59.59 0 0 1-.583.53H.945a.59.59 0 0 1-.585-.53l8.824-5.872.858.715a3.049 3.049 0 0 0 3.908 0l.858-.715 8.823 5.872ZM7.849 11.958.354 16.945V5.717l7.494 6.241Zm15.792 4.987-7.495-4.987 7.495-6.241v11.228ZM22.454 4.53l-9.573 7.972a1.387 1.387 0 0 1-1.776 0L1.532 4.53h20.922Z"
            />
        </svg>
    )
}
