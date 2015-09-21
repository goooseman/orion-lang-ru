i18n.map('ru', {
  global: {
    save: 'Срхранить',
    create: 'Создать',
    logout: 'Выход',
    back: 'Назад',
    cancel: 'Отмена',
    delete: 'Удалить',
    confirm: 'Подтвердить',
    choose: 'Выбрать',
    noPermission: 'У Вас недостаточно прав',
    passwordNotMatch: 'Пароли не совпадают',
    optional: 'Не обязательно'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Email\'ы',
        address: 'Адрес',
        verified: 'Подтверждён'
      },
      password: {
        title: 'Пароль',
        new: 'Новый пароль',
        confirm: 'Подтвердить пароль'
      },
      profile: {
        name: 'Имя'
      }
    },
    index: {
      title: 'Аккаунты',
      actions: {
        edit: 'Редактировать',
      },
      tableTitles: {
        name: 'Имя',
        email: 'Email',
        roles: 'Роли',
        actions: 'Действия'
      }
    },
    update: {
      title: 'Обновить аккаунт',
      messages: {
        noPermissions: 'У Вас недостаточно прав для редактирования прав данного пользователя'
      },
      sections: {
        profile: {
          title: 'Профиль'
        },
        roles: {
          title: 'Роли',
          selectRoles: 'Выберите роли пользователя'
        },
        changePassword: {
          title: 'Изменить пароль'
        },
        deleteUser: {
          title: 'Внимание!',
          advice: 'Удаление пользователя может вызвать проблесы',
          button: 'Удалить пользователя'
        }
      }
    },
    myAccount: {
      title: 'Мой профиль',
    },
    create: {
      title: 'Создать пользователя',
      createInvitation: 'Создать приглашение',
      createUserNow: 'Создать пользователя сейчас',
      inviteOther: 'Пригласить другого',
      selectRoles: 'Выбрать новые роли для пользователя',
      email: 'Email',
      messages: {
        successfullyCreated: 'Приглашение создано успешно'
      }
    },
    changePassword: {
      title: 'Изменить пароль',
    },
    updateProfile: {
      title: 'Обновить профиль',
    },
    register: {
      title: 'Зарегистрироваться',
      registerButton: 'Зарегистрироваться',
      fields: {
        email: 'Email',
        name: 'Имя',
        password: 'Пароль',
        confirmPassword: 'Пароль (ещё раз)'
      },
      messages: {
        invalidEmail: 'Неправильный email',
        invalidInvitationCode: 'Неправильный код приглашения',
      }
    }
  },
  collections: {
    create: {
      title: 'Создать {$1}'
    },
    update: {
      title: 'Обновить {$1}'
    },
    delete: {
      title: 'Удалить {$1}',
      confirmQuestion: 'Вы уверены, что хотите удалить {$1}?'
    },
    common: {
      defaultPluralName: 'записи',
      defaultSingularName: 'запись',
    }
  },
  config: {
    update: {
      title: 'Настройки',
    }
  },
  dictionary: {
    update: {
      title: 'Словарь'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Файл не найден [{$i}]',
      errorUploading: 'Ошибка при загрузке файла',
      errorRemoving: 'Ошибка при удалении файла',
    }
  },
  pages:  {
    schema: {
      title: 'Заголовок',
      url: 'Url',
    },
    index: {
      title: 'Страницы',
    },
    create: {
      title: 'Создать страницу',
      chooseTemplate: 'Выбрать шаблон'
    },
    update: {
      title: 'Обновить страницу',
    },
    delete: {
      title: 'Удалить страницу',
      confirmQuestion: 'Вы уверены, что хотите удалить страницу?'
    }
  },
  attributes: {
    users: {
      pluralName: 'пользователи',
      singularName: 'пользователь',
    },
    file: {
      choose: 'Выберите файл',
      noFile: 'Нет файла',
    },
    image: {
      choose: 'Выберите изображение'
    }
  },
  tabular: {
    search: 'Искать:',
    info: 'Показаны с _START_ по _END_ из _TOTAL_ записей',
    infoEmpty: 'Показаны с 0 по 0 из 0 записей',
    lengthMenu: 'Показать _MENU_ записей',
    emptyTable: 'Нет данных',
    paginate: {
      first: 'Первый',
      previous: 'Предыдущий',
      next: 'Следующий',
      last: 'Последний',
    }
  }
})