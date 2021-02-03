import styled from 'styled-components';
import { Grid } from 'artifak';
import { StyledFeatureItem, FeaturedItemContainer } from './FeatureItem';
import { FeaturedItemIconContainer } from './FeaturedItemIcon';

export const FeaturesGrid = styled(Grid)`
  ${({ theme }) => `
    ${StyledFeatureItem}:nth-child(odd) {
      background: ${theme.colors.primary};
      background-image: none;
      color: ${theme.colors.primary};

      ${FeaturedItemContainer} {
        background: ${theme.colors.white};
      }

      ${FeaturedItemIconContainer} {
        border: 6px solid ${theme.colors.primary};
        background: ${theme.colors.white};
      }
    }

    ${StyledFeatureItem}:nth-child(even) { {
      background: transparent;
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 7px,
        rgba(241, 94, 34, 1) 1px,
        rgba(241, 94, 34, 1) 8px
      );
      color: ${theme.colors.white};

      ${FeaturedItemContainer} {
        background: ${theme.colors.primary};
      }

      ${FeaturedItemIconContainer} {
        border: 6px solid ${theme.colors.white};
        background: ${theme.colors.primary};
      }
    }
  `}
`;
