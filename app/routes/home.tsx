import { HStack } from '@chakra-ui/react';
import { ColorModeButton } from '~/components/ui/color-mode';

import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <HStack>Hi !</HStack>
      <ColorModeButton />
    </>
  );
}
