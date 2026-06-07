import React from 'react'

export default function InstaInRectIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path d="M16.242 6H7.758A1.76 1.76 0 0 0 6 7.758v8.484C6 17.212 6.789 18 7.758 18h8.484A1.76 1.76 0 0 0 18 16.242V7.758A1.76 1.76 0 0 0 16.242 6Zm-4.219 9.14a3.168 3.168 0 0 1-3.164-3.163 3.168 3.168 0 0 1 3.164-3.165 3.168 3.168 0 0 1 3.165 3.165 3.168 3.168 0 0 1-3.165 3.164Zm3.516-5.624a1.056 1.056 0 0 1 0-2.11 1.056 1.056 0 0 1 0 2.11Z" fill="currentColor"/>
            <path d="M15.54 8.11a.352.352 0 1 0 0 .703.352.352 0 0 0 0-.704ZM12.023 9.516a2.464 2.464 0 0 0-2.46 2.46 2.464 2.464 0 0 0 2.46 2.461 2.464 2.464 0 0 0 2.461-2.46 2.464 2.464 0 0 0-2.46-2.461Z" fill="currentColor"/>
            <rect width={23} height={23} x={0.5} y={0.5} stroke="currentColor" rx={1.5} />

        </svg>
    )
}
