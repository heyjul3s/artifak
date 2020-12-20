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
      <Link
        href={link}
        hasChildren={!!children}
        style={!!children ? { pointerEvents: 'none', cursor: 'text' } : {}}
      >
        {name}
      </Link>

      {!!children && (
        <NavContainer>
          {children.map(({ route, name, children }, i) => {
            i += 1;
            return (
              <ChildLinkContainer>
                <LinkItem>
                  <Counter>
                    <LinkCount>{`0${i}`.slice(-2)}</LinkCount>
                  </Counter>
                  <DesktopNavLink
                    link={route}
                    name={name}
                    children={children}
                  />
                </LinkItem>
              </ChildLinkContainer>
            );
          })}
        </NavContainer>
      )}
    </>
  );
}
