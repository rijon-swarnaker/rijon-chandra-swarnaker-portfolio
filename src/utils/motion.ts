export const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 380,
  damping: 30,
} as const;

export const TAB_SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 32,
} as const;

export const createFadeUpVariants = (shouldReduceMotion?: boolean | null) => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: 0.55,
          ease: TRANSITION_EASE,
        },
  },
});

export const createContainerVariants = (stagger = 0.08, shouldReduceMotion?: boolean | null) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          staggerChildren: stagger,
          delayChildren: 0.05,
        },
  },
});
