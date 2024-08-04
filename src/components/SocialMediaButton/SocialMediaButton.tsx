import { ActionIcon, Center } from '@mantine/core';
import classes from './SocialMediaButton.module.css';

const SocialMediaButton = ({ link, children }: { link: string; children: React.ReactNode }) => {
  return (
    <ActionIcon variant="filled" size="lg" color="primary">
      <a href={link} target="_blank">
        <Center>{children}</Center>
      </a>
    </ActionIcon>
  );
};

export default SocialMediaButton;
