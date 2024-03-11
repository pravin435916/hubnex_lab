export const SlideUp = {
    initial:{ opacity: 0, y: 20 },
    animate:{ opacity: 1, y: 10 },
    exit:{ opacity: 0, y: 20 }
}
export const SlideDown = {
    initial: { opacity: 0, y: 0 },
    whileInView: { opacity: 1, y: 10, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    exit: { opacity: 0, y: 0 }
}

export const Slideright = {
    initial:{ opacity: 0, x: -30 },
    whileInView:{ opacity: 1, x: 0 , transition: { type: 'spring', stiffness: 100, damping: 10 }},
}
export const FadeUp = {
    initial:{ opacity: 0 },
    whileInView:{ opacity: 1 },
    exit:{ opacity: 0}
}