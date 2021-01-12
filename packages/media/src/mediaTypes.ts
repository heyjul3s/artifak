export enum MediaTypeKeys {
  'all' = 'all',
  'screen' = 'screen',
  'onlyScreen' = 'onlyScreen',
  'speech' = 'speech',
  'onlySpeech' = 'onlySpeech',
  'print' = 'print',
  'onlyPrint' = 'onlyPrint'
}

export type MediaTypes = {
  [MediaTypeKeys.all]: MediaTypeAll;
  [MediaTypeKeys.screen]: MediaTypeScreen;
  [MediaTypeKeys.onlyScreen]: MediaTypeOnlyScreen;
  [MediaTypeKeys.speech]: MediaTypeSpeech;
  [MediaTypeKeys.onlySpeech]: MediaTypeOnlySpeech;
  [MediaTypeKeys.print]: MediaTypePrint;
  [MediaTypeKeys.onlyPrint]: MediaTypeOnlyPrint;
};

export type MediaTypeAll = 'all';
export type MediaTypeScreen = 'screen';
export type MediaTypeOnlyScreen = 'only screen';
export type MediaTypeSpeech = 'speech';
export type MediaTypeOnlySpeech = 'only speech';
export type MediaTypePrint = 'print';
export type MediaTypeOnlyPrint = 'only print';

export const mediaTypeQueries: MediaTypes = {
  [MediaTypeKeys.all]: 'all',
  [MediaTypeKeys.screen]: 'screen',
  [MediaTypeKeys.onlyScreen]: 'only screen',
  [MediaTypeKeys.speech]: 'speech',
  [MediaTypeKeys.onlySpeech]: 'only speech',
  [MediaTypeKeys.print]: 'print',
  [MediaTypeKeys.onlyPrint]: 'only print'
};
