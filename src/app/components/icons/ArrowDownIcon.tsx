import React from 'react'

export default function ArrowDownIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={5}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M5.48 4.825a.746.746 0 0 1-.96 0L.199 1.02a.549.549 0 0 1 0-.846.746.746 0 0 1 .96 0L5 3.557 8.84.175a.746.746 0 0 1 .961 0 .549.549 0 0 1 0 .846l-4.32 3.804Zm.199-1.256v.833H4.321V3.57h1.358Z"
            />
        </svg>
    )
}
