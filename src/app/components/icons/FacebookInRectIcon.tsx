import React from 'react'

export default function FacebookInRectIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M16.242 6H7.758A1.76 1.76 0 0 0 6 7.758v8.484C6 17.212 6.789 18 7.758 18h3.539v-4.242H9.89v-2.11h1.406v-1.43c0-1.162.946-2.109 2.11-2.109h2.132v2.11h-2.133v1.43h2.133l-.351 2.109h-1.782V18h2.836A1.76 1.76 0 0 0 18 16.242V7.758A1.76 1.76 0 0 0 16.242 6Z"
            />
            <rect width={23} height={23} x={0.5} y={0.5} stroke="currentColor" rx={1.5} />
        </svg>
    )
}
