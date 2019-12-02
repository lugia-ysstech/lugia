import React from 'react';
import { Icon, Theme, notification } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import Copy from '../code-box/Copy';

const directionData = [
  'lugia-icon-direction_arrow_down',
  'lugia-icon-direction_arrow_left',
  'lugia-icon-direction_arrow_right',
  'lugia-icon-direction_arrow_up',
  'lugia-icon-direction_arrows_alt',
  'lugia-icon-direction_backtop',
  'lugia-icon-direction_backward',
  'lugia-icon-direction_caret_down',
  'lugia-icon-direction_caret_left',
  'lugia-icon-direction_caret_right',
  'lugia-icon-direction_caret_up',
  'lugia-icon-direction_Center_alignment',
  'lugia-icon-direction_double_left',
  'lugia-icon-direction_double_right',
  'lugia-icon-direction_down_circle_o',
  'lugia-icon-direction_down_circle',
  'lugia-icon-direction_down_square_o',
  'lugia-icon-direction_down-square',
  'lugia-icon-direction_down',
  'lugia-icon-direction_enter_c',
  'lugia-icon-direction_enter',
  'lugia-icon-direction_fast_backward',
  'lugia-icon-direction_fast_forward',
  'lugia-icon-direction_forward',
  'lugia-icon-direction_Left_aligned',
  'lugia-icon-direction_left_circle_o',
  'lugia-icon-direction_left_circle',
  'lugia-icon-direction_left_square_o',
  'lugia-icon-direction_left-square',
  'lugia-icon-direction_Left',
  'lugia-icon-direction_login',
  'lugia-icon-direction_logout',
  'lugia-icon-direction_menu_food',
  'lugia-icon-direction_menu_unfood',
  'lugia-icon-direction_play_circle_o',
  'lugia-icon-direction_play_circle',
  'lugia-icon-direction_retweet',
  'lugia-icon-direction_right_aligned',
  'lugia-icon-direction_right_circle_o',
  'lugia-icon-direction_right_circle',
  'lugia-icon-direction_right_square_o',
  'lugia-icon-direction_right-square',
  'lugia-icon-direction_right',
  'lugia-icon-direction_rollback',
  'lugia-icon-direction_shrink',
  'lugia-icon-direction_step_backward',
  'lugia-icon-direction_step_forward',
  'lugia-icon-direction_swap_left',
  'lugia-icon-direction_swap_right',
  'lugia-icon-direction_swap',
  'lugia-icon-direction_Telescopic',
  'lugia-icon-direction_up_circle_o',
  'lugia-icon-direction_up_circle',
  'lugia-icon-direction_up_square_o',
  'lugia-icon-direction_up-square',
  'lugia-icon-direction_up',
  'lugia-icon-direction_verticle_left',
  'lugia-icon-direction_verticle_right'
];
const finacialData = [
  'lugia-icon-finacial_check_all',
  'lugia-icon-finacial_copy',
  'lugia-icon-finacial_deselection',
  'lugia-icon-finacial_fail',
  'lugia-icon-finacial_half_star',
  'lugia-icon-finacial_hide_code',
  'lugia-icon-financial_abort',
  'lugia-icon-financial_add_pic',
  'lugia-icon-financial_amplification',
  'lugia-icon-financial_archive',
  'lugia-icon-financial_audit',
  'lugia-icon-financial_Back_file',
  'lugia-icon-financial_bank',
  'lugia-icon-financial_bar_code',
  'lugia-icon-financial_bell',
  'lugia-icon-financial_bold',
  'lugia-icon-financial_calculator',
  'lugia-icon-financial_camera',
  'lugia-icon-financial_choose',
  'lugia-icon-financial_classification',
  'lugia-icon-financial_clip',
  'lugia-icon-financial_cloud',
  'lugia-icon-financial_code',
  'lugia-icon-financial_column_width',
  'lugia-icon-financial_columns',
  'lugia-icon-financial_compass',
  'lugia-icon-financial_conference',
  'lugia-icon-financial_contacts',
  'lugia-icon-financial_copy',
  'lugia-icon-financial_credit_card',
  'lugia-icon-financial_database',
  'lugia-icon-financial_date',
  'lugia-icon-financial_delete',
  'lugia-icon-financial_describe',
  'lugia-icon-financial_disconnect',
  'lugia-icon-financial_download_cloud',
  'lugia-icon-financial_download',
  'lugia-icon-financial_e-mail',
  'lugia-icon-financial_editor',
  'lugia-icon-financial_environment',
  'lugia-icon-financial_excle',
  'lugia-icon-financial_export',
  'lugia-icon-financial_file_unknown',
  'lugia-icon-financial_filing_cabinet',
  'lugia-icon-financial_filter',
  'lugia-icon-financial_folder_add',
  'lugia-icon-financial_folder_open',
  'lugia-icon-financial_folder',
  'lugia-icon-financial_font_colors',
  'lugia-icon-financial_font_size',
  'lugia-icon-financial_form',
  'lugia-icon-financial_founder',
  'lugia-icon-financial_framework',
  'lugia-icon-financial_global',
  'lugia-icon-financial_graph',
  'lugia-icon-financial_group',
  'lugia-icon-financial_hard_disk',
  'lugia-icon-financial_head',
  'lugia-icon-financial_heart_o',
  'lugia-icon-financial_heart',
  'lugia-icon-financial_histogram',
  'lugia-icon-financial_home',
  'lugia-icon-financial_Hourglass',
  'lugia-icon-financial_information_c',
  'lugia-icon-financial_information',
  'lugia-icon-financial_italic',
  'lugia-icon-financial_jpg',
  'lugia-icon-financial_key',
  'lugia-icon-financial_layout',
  'lugia-icon-financial_like_o',
  'lugia-icon-financial_like',
  'lugia-icon-financial_line_height',
  'lugia-icon-financial_line',
  'lugia-icon-financial_link',
  'lugia-icon-financial_loading_o',
  'lugia-icon-financial_loading',
  'lugia-icon-financial_lock',
  'lugia-icon-financial_man',
  'lugia-icon-financial_markdown',
  'lugia-icon-financial_meh_o',
  'lugia-icon-financial_meh',
  'lugia-icon-financial_monitoring',
  'lugia-icon-financial_more',
  'lugia-icon-financial_move',
  'lugia-icon-financial_notification',
  'lugia-icon-financial_number',
  'lugia-icon-financial_omit',
  'lugia-icon-financial_ordered_list',
  'lugia-icon-financial_paper_clip',
  'lugia-icon-financial_pay',
  'lugia-icon-financial_pdf',
  'lugia-icon-financial_pic_center',
  'lugia-icon-financial_pic_left',
  'lugia-icon-financial_pic_right',
  'lugia-icon-financial_pic',
  'lugia-icon-financial_pie-chart',
  'lugia-icon-financial_pin',
  'lugia-icon-financial_poweroff',
  'lugia-icon-financial_ppt',
  'lugia-icon-financial_print',
  'lugia-icon-financial_progress',
  'lugia-icon-financial_QR_code',
  'lugia-icon-financial_questionnaire',
  'lugia-icon-financial_release_letter',
  'lugia-icon-financial_release',
  'lugia-icon-financial_remind',
  'lugia-icon-financial_remote_control',
  'lugia-icon-financial_resd',
  'lugia-icon-financial_sad_o',
  'lugia-icon-financial_sad',
  'lugia-icon-financial_safe',
  'lugia-icon-financial_save',
  'lugia-icon-financial_scan',
  'lugia-icon-financial_search',
  'lugia-icon-financial_service',
  'lugia-icon-financial_setting',
  'lugia-icon-financial_share',
  'lugia-icon-financial_shrink',
  'lugia-icon-financial_skin',
  'lugia-icon-financial_smile_o',
  'lugia-icon-financial_smile',
  'lugia-icon-financial_sort_ascending',
  'lugia-icon-financial_sort_descending',
  'lugia-icon-financial_special_focus',
  'lugia-icon-financial_star_o',
  'lugia-icon-financial_star',
  'lugia-icon-financial_statistical_add',
  'lugia-icon-financial_statistics',
  'lugia-icon-financial_strikethrough',
  'lugia-icon-financial_subtasks',
  'lugia-icon-financial_switch_e_and_c',
  'lugia-icon-financial_table',
  'lugia-icon-financial_tag',
  'lugia-icon-financial_tags',
  'lugia-icon-financial_text',
  'lugia-icon-financial_tools',
  'lugia-icon-financial_transfer_i',
  'lugia-icon-financial_transfer_u',
  'lugia-icon-financial_underline',
  'lugia-icon-financial_unlike_o',
  'lugia-icon-financial_unlike',
  'lugia-icon-financial_unlock',
  'lugia-icon-financial_unordered_list',
  'lugia-icon-financial_upload_cloud',
  'lugia-icon-financial_upload',
  'lugia-icon-financial_usb',
  'lugia-icon-financial_user',
  'lugia-icon-financial_video_camera',
  'lugia-icon-financial_voice_z',
  'lugia-icon-financial_voice',
  'lugia-icon-financial_wallet',
  'lugia-icon-financial_warnings',
  'lugia-icon-financial_wifi',
  'lugia-icon-financial_women',
  'lugia-icon-financial_word'
];
const logoData = [
  'lugia-icon-logo_aliyun',
  'lugia-icon-logo_android_o',
  'lugia-icon-logo_android',
  'lugia-icon-logo_apple_o',
  'lugia-icon-logo_apple',
  'lugia-icon-logo_baidu',
  'lugia-icon-logo_behance',
  'lugia-icon-logo_chrome',
  'lugia-icon-logo_codepen_ciecle',
  'lugia-icon-logo_codepen',
  'lugia-icon-logo_csswizardry',
  'lugia-icon-logo_datastream',
  'lugia-icon-logo_dingding_circle',
  'lugia-icon-logo_dingding',
  'lugia-icon-logo_dribbble',
  'lugia-icon-logo_dropbox',
  'lugia-icon-logo_facebook',
  'lugia-icon-logo_github',
  'lugia-icon-logo_gitlab',
  'lugia-icon-logo_google_plus',
  'lugia-icon-logo_google',
  'lugia-icon-logo_henghe',
  'lugia-icon-logo_html5',
  'lugia-icon-logo_ie',
  'lugia-icon-logo_instagram',
  'lugia-icon-logo_linkedin',
  'lugia-icon-logo_lugia',
  'lugia-icon-logo_medium',
  'lugia-icon-logo_QQ',
  'lugia-icon-logo_skype',
  'lugia-icon-logo_twitter',
  'lugia-icon-logo_visa',
  'lugia-icon-logo_wechat',
  'lugia-icon-logo_weibo_circle',
  'lugia-icon-logo_weibo',
  'lugia-icon-logo_windows_o',
  'lugia-icon-logo_windows',
  'lugia-icon-logo_ysstech',
  'lugia-icon-logo_zhifubao_circle',
  'lugia-icon-logo_zhifubao'
];
const reminderData = [
  'lugia-icon-reminder_refresh',
  'lugia-icon-reminder_ban',
  'lugia-icon-reminder_check_circle_o',
  'lugia-icon-reminder_check_circle',
  'lugia-icon-reminder_check_square_o',
  'lugia-icon-reminder_check_square',
  'lugia-icon-reminder_check',
  'lugia-icon-reminder_clock_circle_o',
  'lugia-icon-reminder_clock_circle',
  'lugia-icon-reminder_close_circle_o',
  'lugia-icon-reminder_close_circle',
  'lugia-icon-reminder_close_square_o',
  'lugia-icon-reminder_close_square',
  'lugia-icon-reminder_close',
  'lugia-icon-reminder_exclamation_circle_o',
  'lugia-icon-reminder_exclamation_circle',
  'lugia-icon-reminder_exclamation',
  'lugia-icon-reminder_info_circle_o',
  'lugia-icon-reminder_info_circle',
  'lugia-icon-reminder_info',
  'lugia-icon-reminder_minus_circle_o',
  'lugia-icon-reminder_minus_circle',
  'lugia-icon-reminder_minus_square_o',
  'lugia-icon-reminder_minus_square',
  'lugia-icon-reminder_minus',
  'lugia-icon-reminder_pause_circle_o',
  'lugia-icon-reminder_pause_circle',
  'lugia-icon-reminder_pause_cycle',
  'lugia-icon-reminder_pause',
  'lugia-icon-reminder_plus_circle_o',
  'lugia-icon-reminder_plus_circle',
  'lugia-icon-reminder_plus_square_o',
  'lugia-icon-reminder_plus_square',
  'lugia-icon-reminder_plus',
  'lugia-icon-reminder_question_circle_o',
  'lugia-icon-reminder_question_circle',
  'lugia-icon-reminder_question',
  'lugia-icon-reminder_replay',
  'lugia-icon-reminder_square_o',
  'lugia-icon-reminder_warning'
];
const IconWrapper = styled.div`
  display: inline-block;
  &:hover {
    background: #4d63ff;
    transform: scale(1.2);
    > i {
      color: white;
    }
  }
  
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  margin: 5px;
  border-radius: 4px;
  background-color: white;
`;


export default class BaseIcon extends React.Component<any, any> {
  getIcon = iconClassArray => {
    let iconClass = '';
    const iconArray = iconClassArray.map(v => {
      iconClass = v;
      return iconClass ? (
        <IconWrapper>
          <Icon
            iconClass={iconClass}
            onClick={() => {
              this.copy.copy(v);
            }}
          />
        </IconWrapper>
      ) : null;
    });
    return iconArray;
  };
  render() {
    const view = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            margin: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            },
            fontSize: 36
          },
          hover: {
            color: 'white',
          },
        }
      }
    };
    return (
      <Theme config={view}>
        <Copy ref={cmp => (this.copy = cmp)}/>
        <h2>方向图标</h2>
        {this.getIcon(directionData)}
        <h2>指示图标</h2>
        {this.getIcon(finacialData)}
        <h2>提示图标</h2>
        {this.getIcon(reminderData)}
        <h2>品牌图标</h2>
        {this.getIcon(logoData)}
      </Theme>
    );
  }
}
