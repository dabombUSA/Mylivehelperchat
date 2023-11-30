<?php

echo json_encode(array(
    "homepage.invisible" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Invisible'),
    "homepage.visible"  => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Visible'),
    "homepage.change_visibility" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/user_settings','Change my visibility to visible/invisible'),
    "homepage.change_online_status" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/user_settings', 'Change my status to online/offline'),
    "homepage.status_offline" => erTranslationClassLhTranslation::getInstance()->getTranslation('user/account', 'Offline'),
    "homepage.status_online" => erTranslationClassLhTranslation::getInstance()->getTranslation('user/account', 'Online'),
    "homepage.always_online" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/user_settings','Change my persistent status to online'),
    "homepage.always_online_mode" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Always online'),
    "homepage.always_online_activity" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Based on activity'),

    // Open chat
    'front_default.chat_id_to_open' => erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Chat ID to open'),
    'front_default.open_a_chat' => erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Open a chat'),

    // Widgets
    'widget_title.pending_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Pending chats'),
    'widget_title.bot_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Bot chats'),
    'widget_title.active_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Active chats'),
    'widget_title.unread_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Unread messages'),
    'widget_title.group_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Group chats'),
    'widget_title.subject_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Ongoing trigger alerts!'),
    'widget_title.transfer_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Transferred chats'),
    'widget_title.my_chats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','My active and pending chats'),
    'widget_title.depgroups_stats' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Departments stats'),
    'widget_title.online_op' => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Online operators'),

    // Group chat widget
    "group_chat.unread_messages" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','You have unread messages'),
    "group_chat.group_name" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Name'),
    "group_chat.accept_join" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Accept invitation and join private chat'),
    "group_chat.reject_private" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Reject for private chat'),
    "group_chat.join_public" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','You can join public chat'),
    "group_chat.already_member" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','You are member of this group chat'),
    "group_chat.private_group" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Private group'),
    "group_chat.public_group" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Public group'),
    "group_chat.new" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','New'),
    "group_chat.new_group_name" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Your new group name'),

    // Widget
    "widget.more_rows" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','More rows'),
    "widget.less_rows" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Less rows'),
    "widget.collapse_expand" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'collapse/expand'),
    "widget.time_ago" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'Time ago'),
    "widget.wait_time" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface', 'Wait time'),
    "widget.last_message" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface', 'Last message'),
    "widget.last_activity_ago" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface', 'Last activity ago'),
    "widget.dep_group" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface', 'Department group'),
    "widget.department" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Department'),
    "widget.visitor" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Visitor'),
    "widget.send_receive" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Receive or send indicator and time since it happened'),
    "widget.sort_by_last_msg_time" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Sort by last message time'),
    "widget.sort_by_start_time" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Sort by chat start time'),
    "widget.time_since_last_msg" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Time since last message'),
    "widget.created_at" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Created'),
    "widget.operator" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Operator'),
    "widget.sort_by_online_status" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Sort by online status'),
    "widget.transferred_to_you" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Chats transferred to you directly'),
    "widget.active" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Active'),
    "widget.pending" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Pending'),
    "widget.delete_chat" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Delete chat'),
    "widget.sort" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Sort'),
    "widget.redirect_contact" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Redirect user to contact form.'),
    "widget.are_you_sure" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Are you sure?'),
    "widget.offline_request" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Offline request'),
    "widget.has_unread_messages" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Has unread messages'),
    "widget.open_new_window" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Open in a new window'),
    "widget.accept_chat" => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Accept chat'),

    // Widget options
    "widget_options.hide_disabled" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Hide disabled'),
    "widget_options.check_all" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Check all'),
    "widget_options.only_online" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Only online'),
    "widget_options.only_explicit_online" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Only explicit online'),
    "widget_options.hide_hidden" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Hide hidden'),
    "widget_options.hide_dep_groups" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Hide departments groups'),
    "widget_options.hide_dep" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Hide departments'),
    "widget_options.all_dep" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','All departments'),
    "widget_options.users" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Users'),
    "widget_options.limit" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Number of elements in list'),
    "widget_options.departments" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'departments'),
    "widget_options.search_operators" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Search for operator'),
    "widget_options.search_dep" => erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Search for department'),



));
