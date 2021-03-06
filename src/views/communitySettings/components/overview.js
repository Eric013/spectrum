// @flow
import * as React from 'react';
import EditForm from './editForm';
import ChannelList from './channelList';
import BrandedLogin from './brandedLogin';
import {
  SectionsContainer,
  Column,
} from '../../../components/settingsViews/style';

type Props = {
  communitySlug: string,
  community: Object,
};
class Overview extends React.Component<Props> {
  render() {
    const { community, communitySlug } = this.props;

    return (
      <SectionsContainer>
        <Column>
          <EditForm community={community} />
        </Column>
        <Column>
          <BrandedLogin id={community.id} />
          <ChannelList id={community.id} communitySlug={communitySlug} />
        </Column>
      </SectionsContainer>
    );
  }
}

export default Overview;
