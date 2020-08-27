import Link from 'next/link';

type Props = {
  name: string;
  query: { content: string };
};

export function NavLink({ name, query }: Props) {
  return <Link href={{ pathname: '/', query }}>{name}</Link>;
}
