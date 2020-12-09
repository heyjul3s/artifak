import { Paragraph, Strong } from '../components/Typography';
import { Params } from './Params';

export const ParamsDescription = ({ label = '<props>', params }) => {
  return (
    <>
      <Paragraph display="inline-block">
        <Strong>
          <em>{label}</em>
        </Strong>
        &nbsp;
      </Paragraph>
      <Params params={params} />
    </>
  );
};
