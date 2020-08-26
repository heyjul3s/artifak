export const createBlockComponentsExampleUsage = `
  import { createBlockComponents } from 'artifak';

  const styles = {
    Article: {
      margin: '0 15px',
      padding: '30px 0',
      fontSize: '20px'
      color: 'hotpink',
      as: 'article'
    },

    Aside: {
      padding: '15px'
      as: 'aside'
    }
  }

  export const { Article, Aside } = createBlockComponents<typeof styles>(styles);
`;

export const createBlockComponentsDemo = `
  import { Article } from '../path/to/where/your/typography/components/are/generated;

  export function BlogArticle({ title, content }) {
    return (
      <Article>
        <h1>{title}</h1>
        <p>{content}</p>
      </Article>
    )
  }
`;
