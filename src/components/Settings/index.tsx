import React, { FC } from 'react';
import { Button, Drawer } from 'antd';
import { Flexbox } from '@arvinxu/layout-kit';

import { useShowSettings } from './useShowSettings';
import {
  FormField,
  TablePickerSynced,
  ViewPickerSynced,
  FieldPickerSynced,
} from '@airtable/blocks/ui';
import { GlobalSettingsKeys } from '../../features/settings';
import { useBaseTable } from '../../hooks/useBaseTable';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const { closeSettings, isShowSettings } = useShowSettings();

  const table = useBaseTable();

  return (
    <Drawer
      visible={isShowSettings}
      title={'设置面板'}
      onClose={closeSettings}
      footer={
        <Flexbox direction={'horizontal-reverse'}>
          <Button type={'primary'} onClick={closeSettings}>
            确定
          </Button>
        </Flexbox>
      }
    >
      <Flexbox>
        <FormField label="表格">
          <TablePickerSynced globalConfigKey={GlobalSettingsKeys.tableId} />
        </FormField>
        <FormField label="视图">
          <ViewPickerSynced
            table={table}
            globalConfigKey={GlobalSettingsKeys.viewId}
          />
        </FormField>
        <FormField label="阶段">
          <FieldPickerSynced
            table={table}
            globalConfigKey={GlobalSettingsKeys.flowFieldId}
          />
        </FormField>
        <FormField label="描述">
          <FieldPickerSynced
            table={table}
            globalConfigKey={GlobalSettingsKeys.descriptionId}
          />
        </FormField>
        <FormField label="图片">
          <FieldPickerSynced
            table={table}
            globalConfigKey={GlobalSettingsKeys.imageFieldId}
          />
        </FormField>
        <FormField label="链接">
          <FieldPickerSynced
            table={table}
            globalConfigKey={GlobalSettingsKeys.urlFieldId}
          />
        </FormField>
      </Flexbox>
    </Drawer>
  );
};

export default Settings;
