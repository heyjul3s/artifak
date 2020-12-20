import { Paragraph, Strong } from '../Typography';

export const Params = ({ params }: any) => {
  const propertyKeys = Object.keys(params);

  return (
    <>
      <Paragraph display="inline-block">
        (
        {propertyKeys.map((key, i) => {
          const comma = i !== propertyKeys.length - 1 ? ', ' : '';

          return (
            <span>
              <Strong>{key}</Strong>
              {`: ${params[key]}${comma}`}
            </span>
          );
        })}
        )
      </Paragraph>
    </>
  );
};
