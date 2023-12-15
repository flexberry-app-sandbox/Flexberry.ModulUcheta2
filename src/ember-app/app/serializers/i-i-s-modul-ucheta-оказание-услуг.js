import { Serializer as ОказаниеУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-оказание-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказаниеУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
