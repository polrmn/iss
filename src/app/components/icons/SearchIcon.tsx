import React from 'react'

export default function SearchIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            {...props}
        >
            <g stroke="currentColor" strokeWidth={0.622} clipPath="url(#a)">
                <path d="M13.423 10.738a5.778 5.778 0 0 0 0-8.162 5.777 5.777 0 0 0-8.16 0 5.659 5.659 0 0 0-.869 6.965s.096.16-.033.29l-2.945 2.944C.83 13.36.691 14.18 1.21 14.7l.09.09c.52.52 1.339.38 1.925-.206l2.938-2.938c.135-.136.296-.04.296-.04a5.659 5.659 0 0 0 6.964-.868ZM6.328 9.672a4.269 4.269 0 0 1 0-6.03 4.269 4.269 0 0 1 6.03 0 4.269 4.269 0 0 1 0 6.03 4.269 4.269 0 0 1-6.03 0Z" />
                <path d="M6.959 6.44a.486.486 0 0 1-.194-.04.515.515 0 0 1-.264-.668c.673-1.63 2.273-2.612 3.862-1.923.253.11.372.41.264.668a.493.493 0 0 1-.651.271c-1.084-.47-2.1.27-2.559 1.381a.497.497 0 0 1-.458.312Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>

    )
}
