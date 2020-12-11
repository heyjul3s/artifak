import {
  Link,
  NavContainer,
  ChildLinkContainer,
  LinkItem,
  Counter,
  LinkCount
} from './styles';

export function DesktopNavLink({ children, link, name }) {
  return (
    <>
      <Link href={link} hasChildren={!!children}>
        {name}
      </Link>

      {!!children && (
        <NavContainer>
          {children.map((child, i) => {
            i += 1;
            return (
              <ChildLinkContainer>
                <LinkItem>
                  <Counter>
                    <LinkCount>{`0${i}`.slice(-2)}</LinkCount>
                  </Counter>
                  <DesktopNavLink {...child} />
                </LinkItem>
              </ChildLinkContainer>
            );
          })}
        </NavContainer>
      )}
    </>
  );
}
