import { AuthWrapper } from './styles';

type AuthBlockProps = {
  children: React.ReactNode;
};

export default function AuthBlock({ children }: AuthBlockProps) {
  return <AuthWrapper>{children}</AuthWrapper>;
}
