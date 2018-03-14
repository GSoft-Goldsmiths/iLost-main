import { image1, image2, image3 } from './sampleImages';

const sampleMarkers = [
  {
    coordinate: {
      latitude: 51.47427313512371,
      longitude: -0.03544807434082031,
    },
    title: '10 mins ago',
    description: '5km away',
  },
  {
    coordinate: {
      latitude: 51.47327313512371,
      longitude: -0.03541807434082031,
    },
    title: '15 mins ago',
    description: '5km away',
  },
  {
    coordinate: {
      latitude: 51.47337313512371,
      longitude: -0.04541807434082031,
    },
    title: '35 mins ago',
    description: '5km away',
  },
];

const sampleItemList = [
  {
    id: 0,
    trackerID: 5566,
    name: 'school bag',
    image: image1,
    locations: [
      {
        coordinate: {
          latitude: 51.47427313512371,
          longitude: -0.03544807434082031,
        },
        saveTime: 1520288072,
        title: '10 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47327313512371,
          longitude: -0.03541807434082031,
        },
        saveTime: 1520289072,
        title: '15 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47337313512371,
          longitude: -0.04541807434082031,
        },
        saveTime: 1520290072,
        title: '35 mins ago',
        description: '5km away',
      },
    ],
  },
  {
    id: 1,
    trackerID: 9527,
    name: 'traveling bag',
    image: image2,
    locations: [
      {
        coordinate: {
          latitude: 51.47427313512371,
          longitude: -0.03544807434082031,
        },
        saveTime: 1520288072,
        title: '10 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47327313512371,
          longitude: -0.03541807434082031,
        },
        saveTime: 1520289072,
        title: '15 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47337313512371,
          longitude: -0.04541807434082031,
        },
        saveTime: 1520290072,
        title: '35 mins ago',
        description: '5km away',
      },
    ],
  },
  {
    id: 2,
    trackerID: 9471,
    name: 'another bag',
    image: image3,
    locations: [
      {
        coordinate: {
          latitude: 51.47427313512371,
          longitude: -0.03544807434082031,
        },
        saveTime: 1520288072,
        title: '10 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47327313512371,
          longitude: -0.03541807434082031,
        },
        saveTime: 1520289072,
        title: '15 mins ago',
        description: '5km away',
      },
      {
        coordinate: {
          latitude: 51.47337313512371,
          longitude: -0.04541807434082031,
        },
        saveTime: 1520290072,
        title: '35 mins ago',
        description: '5km away',
      },
    ],
  },
];

export {
  sampleMarkers,
  sampleItemList,
};
