import React from 'react'

export default function FacebookIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M10.387 18V9h2.484l.33-3.104h-2.814l.003-1.552c0-.81.077-1.243 1.24-1.243h1.553V0h-2.484C7.71 0 6.66 1.505 6.66 4.036v1.862H4.8v3.1h1.86V18h3.726Z"
            />
        </svg>
    )
}
