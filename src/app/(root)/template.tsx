import AnimationTemplate from '@/animation/AnimationTemplate';
import React from 'react'

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AnimationTemplate>
            {children}
        </AnimationTemplate>
    )
}
