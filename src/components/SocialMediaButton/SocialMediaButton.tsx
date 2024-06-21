import { ActionIcon } from '@mantine/core';

const SocialMediaButton = ({ link, children }: { link: string; children: React.ReactNode }) => {
  return (
    <ActionIcon variant="transparent">
      <a href={link} target="_blank">
        {children}
      </a>
    </ActionIcon>
  );
};

export default SocialMediaButton;
