import { Layout } from '../components/Layout';
import { H1, Paragraph } from '../components/Typography';

export default function Home() {
  return (
    <Layout>
      <>
        <H1>Introduction</H1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim
          elit. Cras non risus in ligula consequat commodo. Fusce eleifend,
          mauris vel sodales venenatis, nulla felis pretium felis, quis vehicula
          orci eros ut lacus. Proin eget magna vel arcu cursus sagittis finibus
          nec quam. In eu ipsum varius, eleifend erat vel, consectetur ante.
          Fusce magna nunc, ullamcorper eget ultricies condimentum, placerat
          eget nulla. Etiam lobortis, tellus eu finibus commodo, magna augue
          condimentum massa, eu luctus tellus turpis eu erat. Aenean vel
          facilisis risus. Fusce aliquam sollicitudin ligula rhoncus iaculis.
          Integer sit amet venenatis velit. Proin vel nibh elit. Nam interdum,
          urna sit amet maximus condimentum, mauris ipsum malesuada elit, in
          pretium odio tellus sit amet arcu. Proin turpis diam, rutrum euismod
          urna eu, sollicitudin pretium nisi.
        </Paragraph>

        <Paragraph>
          Integer et turpis vel lorem hendrerit elementum ac in justo. Integer
          suscipit turpis eget rhoncus tristique. Morbi sodales purus nec velit
          rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur vehicula ut eros
          quis fringilla. Donec sed cursus risus. Sed ultricies ultrices
          rhoncus. Ut massa dui, sodales sed blandit quis, hendrerit quis nunc.
          Aenean tellus ante, suscipit eu arcu sed, viverra tincidunt ante.
        </Paragraph>

        <Paragraph>
          Sed mattis non est vel aliquet. Duis ultricies massa in urna accumsan
          porta. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Proin sed pretium ligula. Fusce vitae mi
          condimentum, interdum felis et, maximus ipsum. Integer aliquam arcu id
          elit mattis tempor. Phasellus lacinia massa sit amet erat euismod
          aliquet. In turpis enim, aliquam ac laoreet eget, tempus non neque. In
          hac habitasse platea dictumst. In ornare et quam in molestie. Etiam
          elementum mollis ipsum at laoreet. In et pellentesque orci.
        </Paragraph>
      </>
    </Layout>
  );
}
