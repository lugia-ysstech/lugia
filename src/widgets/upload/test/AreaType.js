import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
const Text=styled.span`
  display:inline-block;
  padding:0 10px;
`;
const Box=styled.div`
  margin-bottom:10px;
`;
export default class AreaType extends React.Component<any, any> {
  render(){
    return (
      <div>
        <Box>
          <Text>default</Text><Upload areaType={'default'}/>
        </Box>
        <Box>
          <Text>button</Text><Upload areaType={'button'}/>
        </Box>
        <Box>
          <Text>picture-small</Text><Upload areaType={'picture'} size={'small'}/>
        </Box>
        <Box>
        <Text>picture-default</Text><Upload areaType={'picture'} size={'default'}/>
      </Box>
        <Box>
          <Text>picture-large</Text><Upload areaType={'picture'} size={'large'}/>
        </Box>
        <Box>
          <Text>both</Text><Upload areaType={'both'}/>
        </Box>
        <Box>
          <Text>area</Text><Upload areaType={'area'}/>
        </Box>

      </div>

    )
  }
}
