import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'РасчетОстВремL'
  */
  modelProjection: 'РасчетОстВремL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-modul-ucheta-расчет-ост-врем'
  */
  modelName: 'i-i-s-modul-ucheta-расчет-ост-врем',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { IISModulUchetaРасчетОстВремL: {} }
  }),
});
