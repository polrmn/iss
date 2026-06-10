import React from 'react'

export default function FacebookInRectIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_1438_2057_header)">
                <path d="M16.2422 6H7.75781C6.78864 6 6 6.78864 6 7.75781V16.2422C6 17.2114 6.78864 18 7.75781 18H11.2969V13.7578H9.89062V11.6484H11.2969V10.2188C11.2969 9.05557 12.2431 8.10938 13.4062 8.10938H15.5391V10.2188H13.4062V11.6484H15.5391L15.1875 13.7578H13.4062V18H16.2422C17.2114 18 18 17.2114 18 16.2422V7.75781C18 6.78864 17.2114 6 16.2422 6Z" fill="currentColor"></path>
            </g>
            <rect x="0.5" y="0.5" width="23" height="23" rx="1.5" stroke="currentColor"></rect>
            <defs>
                <clipPath id="clip0_1438_2057_header">
                    <rect width="12" height="12" fill="white" transform="translate(6 6)"></rect>
                </clipPath>
            </defs>
        </svg>
    )
}
