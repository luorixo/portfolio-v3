import classes from './NavigationBar.module.css';

const InverseNavElement = () => {
  return (
    <svg className={classes.inverseElement}>
      <defs>
        <mask id="cutoutMask">
          <rect width="100vw" height="100vh" fill="white" />
          <rect
            x="var(--mantine-spacing-xs)"
            y="var(--mantine-spacing-xs)"
            width="calc(100vw - 2 * var(--mantine-spacing-xs))"
            height="calc(100vh - 2 * var(--mantine-spacing-xs))"
            rx="var(--mantine-radius-md)"
            ry="var(--mantine-radius-md)"
            fill="black"
          />
        </mask>
      </defs>
      <rect
        width="100vw"
        height="100vh"
        fill="var(--mantine-color-primary-1)"
        mask="url(#cutoutMask)"
      />
    </svg>
  );
};

export default InverseNavElement;
