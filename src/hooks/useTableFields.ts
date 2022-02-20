import { useGlobalConfig, useRecords } from '@airtable/blocks/ui';
import { GlobalSettingsKeys } from '../features/settings';
import { useBaseTable } from './useBaseTable';
import { getProductData } from '../utils/data';
import { useMemo } from 'react';

export const useDataFromTableFields = () => {
  const table = useBaseTable();

  const globalConfig = useGlobalConfig();

  const viewId = globalConfig.get(GlobalSettingsKeys.viewId) as string;
  const view = table?.getViewByIdIfExists(viewId);

  const flowFieldId = globalConfig.get(
    GlobalSettingsKeys.flowFieldId
  ) as string;
  const flowField = table?.getFieldByIdIfExists(flowFieldId);

  const urlFieldId = globalConfig.get(GlobalSettingsKeys.urlFieldId) as string;
  const urlField = table?.getFieldByIdIfExists(urlFieldId);

  const imageFieldId = globalConfig.get(
    GlobalSettingsKeys.imageFieldId
  ) as string;
  const imageField = table?.getFieldByIdIfExists(imageFieldId);

  const descriptionFieldId = globalConfig.get(
    GlobalSettingsKeys.descriptionId
  ) as string;
  const descriptionField = table?.getFieldByIdIfExists(descriptionFieldId);

  const records = useRecords(view);

  const data = useMemo(() => {
    if (!records) return [];

    return getProductData(records, {
      flowField,
      urlField,
      imageField,
      descriptionField,
    });
  }, [records, flowField, urlField, imageField]);

  return { data, isEmpty: data.length === 0 };
};
