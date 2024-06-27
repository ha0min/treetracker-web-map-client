import { mountWithTheme as mount } from 'models/test-utils';
import TreeCapturesTimeline from '.';

describe('Featured Planters Slider', () => {
  it('it shows tree captures', () => {
    // fake data
    const mockData = {
      captures: [
        {
          id: 186734,
          lat: -4.881696978000001,
          lon: 38.37997515399998,
          time_created: '2019-03-15T06:46:40.000Z',
          image_url:
            'https://treetracker-dev-images.s3.eu-central-1.amazonaws.com/2020.10.19.09.50.52_-5.508076904796398_38.98152805626448_28181c3e-e5b9-442b-8bb4-00de35de3de2_IMG_20201019_094643_486288846930987329.jpg',
        },
        {
          id: 186734,
          lat: -4.881696978000001,
          lon: 38.37997515399998,
          time_created: '2020-10-29T06:46:40.000Z',
          image_url:
            'https://treetracker-production-images.s3.eu-central-1.amazonaws.com/2023.02.17.11.59.47_38.364922414000006_-122.51189396800001_a906ab31-5169-421c-8df3-be43f24d4d9c_IMG_20230217_111351_7976264471450881710.jpg',
        },

        {
          id: 186734,
          lat: -4.881696978000001,
          lon: 38.37997515399998,
          time_created: '2022-06-03T06:46:40.000Z',
          image_url:
            'https://treetracker-production-images.s3.eu-central-1.amazonaws.com/2021.07.05.14.00.45_-3.2064076340000005_36.640772894_7b988c04-668e-48f5-b2e5-906f7d8374eb_IMG_20210705_132121_643781854.jpg',
        },
      ],
    };
    mount(<TreeCapturesTimeline captures={mockData.captures} />);
  });
});