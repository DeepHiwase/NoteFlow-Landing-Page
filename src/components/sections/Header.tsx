interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header className="bg-gradient-to-bottom py-10">{children}</header>;
}
