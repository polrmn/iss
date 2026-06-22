import { HowToApplyType } from "@/types/howToApply";
import ApplicationIcon from "@/app/components/icons/apply/ApplicationIcon";
import ArrivalIcon from "@/app/components/icons/apply/ArrivalIcon";
import InvitationIcon from "@/app/components/icons/apply/InvitationIcon";
import SignInIcon from "@/app/components/icons/apply/SignInIcon";
import StudingIcon from "@/app/components/icons/apply/StudingIcon";
import TuitionIcon from "@/app/components/icons/apply/TuitionIcon";
import VisaIcon from "@/app/components/icons/apply/VisaIcon";

export const howToApply: HowToApplyType = {
    title: 'How to Apply?',
    navigation: [
        {
            title: 'On-Campus Education',
            slug: 'on-campus'
        },
        {
            title: 'Online Education',
            slug: 'online'
        },
        {
            title: 'Distance Education',
            slug: 'distance'
        },
        {
            title: 'Short courses',
            slug: 'courses'
        },
    ],
    slides: [
        {
            slug: 'on-campus',
            steps: [
                {
                    title: 'Application',
                    description: 'Send us scanned copies of your documents using the online application form to get admitted. Get your Admission Letter and invoice in 1-2 working days.',
                    icon: <ApplicationIcon />
                },
                {
                    title: 'Invitation',
                    description: 'As soon as you cover your first-year tuition fee according to the invoice provided in Admission Letter we shall send you Invitation Letter to start the Visa process.',
                    icon: <InvitationIcon />
                },
                {
                    title: 'Visa Processing',
                    description: 'Obtain a Student Visa at the nearest Swiss embassy or consulate. We will help you collect all the necessary documents and provide 24/7 support.',
                    icon: <VisaIcon />
                },
                {
                    title: 'Arriving',
                    description: 'Inform us about your arrival in Switzerland so we could arrange the official meeting at the airport and transfer to accommodation facilities.',
                    icon: <ArrivalIcon />
                },
            ]
        },
        {
            slug: 'online',
            steps: [
                {
                    title: 'Application',
                    description: 'Send us scanned copies of your documents using the online application form to get admitted. Get your Admission Letter and invoice in 1-2 working days.',
                    icon: <ApplicationIcon />
                },
                {
                    title: 'Tuition',
                    description: 'Cover your first-year tuition fee according to the invoice provided. Do not hesitate to ask for assistance and additional information anytime you need!',
                    icon: <TuitionIcon />
                },
                {
                    title: 'Signing-In',
                    description: 'Use your personal login provided by the university to log in to the Online Education Platform to get access to all the educational materials, lectures, and assignments.',
                    icon: <SignInIcon />
                },
                {
                    title: 'Studying',
                    description: 'As soon as you join ISS Online Education Platform you are free to start your academic journey with the best Online Business School in Europe.',
                    icon: <StudingIcon />
                },
            ]
        },
        {
            slug: 'distance',
            steps: [
                {
                    title: 'Application',
                    description: 'Send us scanned copies of your documents using the online application form to get admitted. Get your Admission Letter and invoice in 1-2 working days.',
                    icon: <ApplicationIcon />
                },
                {
                    title: 'Tuition',
                    description: 'Cover your first-year tuition fee according to the invoice provided. Do not hesitate to ask for assistance and additional information anytime you need!',
                    icon: <TuitionIcon />
                },
                {
                    title: 'Signing-In',
                    description: 'Use your personal login provided by the university to log in to the Online Education Platform to get access to all the educational materials, lectures, and assignments.',
                    icon: <SignInIcon />
                },
                {
                    title: 'Studying',
                    description: 'As soon as you join ISS Online Education Platform you are free to start your academic journey with the best Online Business School in Europe.',
                    icon: <StudingIcon />
                },
            ]
        },
        {
            slug: 'courses',
            steps: [
                {
                    title: 'Application',
                    description: 'Choose the most suitable short course according to your academic preferences and apply using our online application form or email us at admissions@isschool.ch. Receive an Admission Letter and Invoice in 1-2 working days.',
                    icon: <ApplicationIcon />
                },
                {
                    title: 'Tuition',
                    description: 'Cover your short course tuition fee according to the invoice provided. Do not hesitate to ask for assistance and additional information anytime you need!',
                    icon: <TuitionIcon />
                },
                {
                    title: 'Signing-In',
                    description: 'Use your personal login provided by the university to log in to the Online Education Platform to get access to all the educational materials, lectures, and assignments.',
                    icon: <SignInIcon />
                },
                {
                    title: 'Studying',
                    description: 'As soon as you join the ISS Online Education Platform, you are free to start your short course with the International Swiss School.',
                    icon: <StudingIcon />
                },
            ]
        },
    ]
}