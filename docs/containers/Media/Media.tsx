import { Paragraph, Strong } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import { min, max, minMax, and, or, single } from './examples';
import { ArticleSubSectionTitle } from '../../components/Article/ArticleSubSectionTitle';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';
import { FlexTable } from '../../components/FlexTable';

export function Media() {
  return (
    <Doc title="Media">
      <MediaContent />
    </Doc>
  );
}

export function MediaContent() {
  return (
    <>
      <Paragraph>
        Although most width related queries should be taken care of via Styled
        System, sometimes our concern goes beyond that and what's more, there
        are currently newer media queries that we can specify now. Therefore, a
        media query mixin is included with Artifak to help in regards to this.
        At its current incarnation, the mixin only supports "and" and "or" media
        query operators. The "not" operator is not supported yet.
      </Paragraph>

      <HR />

      <APIheading name="media" />
      <Paragraph>
        The mixin currently supports the following media queries. Below are a
        list of props and their respective values.
      </Paragraph>

      <APIheading name="Media Types" />

      <FlexTable
        cells={[
          {
            prop: 'all',
            content: 'all'
          },
          {
            prop: 'screen',
            content: 'screen'
          },
          {
            prop: 'onlyScreen',
            content: 'only screen'
          },
          {
            prop: 'speech',
            content: 'speech'
          },
          {
            prop: 'onlySpeech',
            content: 'only speech'
          },
          {
            prop: 'print',
            content: 'print'
          },
          {
            prop: 'onlyPrint',
            content: 'only print'
          }
        ]}
      />

      <br />

      <APIheading name="Media Boundaries" />
      <Paragraph>
        The following queries can also be used with "min" and "max".
      </Paragraph>

      <FlexTable
        cells={[
          {
            prop: 'width',
            content: 'width'
          },
          {
            prop: 'height',
            content: 'height'
          },
          {
            prop: 'ratio',
            content: 'aspect-ratio'
          },
          {
            prop: 'res',
            content: 'resolution'
          }
        ]}
      />

      <br />

      <APIheading name="Media Input" />
      <FlexTable
        cells={[
          {
            prop: 'hover',
            content: 'hover: hover'
          },
          {
            prop: 'hoverNone',
            content: 'hover: none'
          },
          {
            prop: 'anyHover',
            content: 'any-hover: hover'
          },
          {
            prop: 'anyHoverNone',
            content: 'any-hover: none'
          },
          {
            prop: 'pointer',
            content: 'pointer: pointer'
          },
          {
            prop: 'pointerNone',
            content: 'pointer: none'
          },
          {
            prop: 'anyPointer',
            content: 'any-pointer: pointer'
          },
          {
            prop: 'anyPointerNone',
            content: 'any-pointer: none'
          }
        ]}
      />

      <br />

      <APIheading name="Media Display" />
      <FlexTable
        cells={[
          {
            prop: 'fullScreen',
            content: 'display-mode: fullscreen'
          },
          {
            prop: 'minUI',
            content: 'display-mode: minimal-ui'
          },
          {
            prop: 'browser',
            content: 'display-mode: browser'
          },
          {
            prop: 'standalone',
            content: 'display-mode: standalone'
          },
          {
            prop: 'portrait',
            content: 'orientation: portrait'
          },
          {
            prop: 'landscape',
            content: 'orientation: landscape'
          }
        ]}
      />

      <br />

      <APIheading name="Media Accessibility" />
      <FlexTable
        cells={[
          {
            prop: 'darkColorScheme',
            content: 'prefers-color-scheme: dark'
          },
          {
            prop: 'lightColorScheme',
            content: 'prefers-color-scheme: light'
          },
          {
            prop: 'reducedMotion',
            content: 'prefers-reduced-motion: reduce'
          },
          {
            prop: 'reducedMotionAny',
            content: 'prefers-reduced-motion: no-preference'
          }
        ]}
      />

      <HR />

      <ArticleSubSectionTitle>Usage</ArticleSubSectionTitle>
      <Paragraph>
        Usage is quite straightforward. For ranged queries like min and max,
        include the values that you desire and for others like orientatation,
        simply import and include them in the query object. Below are some usage
        demos.
      </Paragraph>

      <HR />

      <APIheading name="Single Value Queries" />
      <Paragraph>
        Returns an equivalent of <Strong>"@media (width: 768px)"</Strong>
      </Paragraph>
      <Syntax>{single}</Syntax>

      <HR />

      <APIheading name="Min Queries" />
      <Paragraph>
        Returns an equivalent of <Strong>"@media (min-width: 768px)"</Strong>
      </Paragraph>
      <Syntax>{min}</Syntax>

      <HR />

      <APIheading name="Max Queries" />
      <Paragraph>
        Returns an equivalent of <Strong>"@media (max-width: 768px)"</Strong>
      </Paragraph>
      <Syntax>{max}</Syntax>

      <HR />

      <APIheading name="Min And Max Queries" />
      <Paragraph>
        Returns an equivalent of{' '}
        <Strong>"@media (min-width: 768px) and (max-width: 1200px)"</Strong>
      </Paragraph>
      <Syntax>{minMax}</Syntax>

      <HR />

      <APIheading name="Querying with the 'AND' operator" />
      <Paragraph>
        To formulate queries with the "and" operator, simply add your query to
        the same query object. Below will formulate a query equivalent to:
        <Strong>"@media screen and (min-width: 768px)"</Strong>
      </Paragraph>
      <Syntax>{and}</Syntax>

      <HR />

      <APIheading name="Querying with the 'OR' operator" />
      <Paragraph>
        To formulate queries with the "or" operator, simply add another query
        object as argument. Below will formulate a query equivalent to:{' '}
        <Strong>
          "@media screen and (min-width: 768px), (orientation: landscape)"
        </Strong>
      </Paragraph>
      <Syntax>{or}</Syntax>
    </>
  );
}
