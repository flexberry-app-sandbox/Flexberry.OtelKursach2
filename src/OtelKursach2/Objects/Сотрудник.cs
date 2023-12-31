﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OtelKursach2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "КодСотрудника as \'Код сотрудника\'",
            "Имя as \'Имя\'",
            "Фамилия as \'Фамилия\'",
            "Отчесвто as \'Отчесвто\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("СотрудникE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникL", new string[] {
            "КодСотрудника as \'Код сотрудника\'",
            "Имя as \'Имя\'",
            "Фамилия as \'Фамилия\'",
            "Отчесвто as \'Отчесвто\'",
            "Должность.Наименование as \'Наименование\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСотрудника;
        
        private string fИмя;
        
        private string fФамилия;
        
        private string fОтчесвто;
        
        private IIS.OtelKursach2.Должность fДолжность;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Get start)

                // *** End programmer edit section *** (Сотрудник.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудник.Имя Get end)

                // *** End programmer edit section *** (Сотрудник.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Set start)

                // *** End programmer edit section *** (Сотрудник.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудник.Имя Set end)

                // *** End programmer edit section *** (Сотрудник.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодСотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.КодСотрудника CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.КодСотрудника CustomAttributes)
        public virtual int КодСотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Get start)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Get start)
                int result = this.fКодСотрудника;
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Get end)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Set start)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Set start)
                this.fКодСотрудника = value;
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Set end)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Set end)
            }
        }
        
        /// <summary>
        /// Отчесвто.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Отчесвто CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Отчесвто CustomAttributes)
        [StrLen(255)]
        public virtual string Отчесвто
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Отчесвто Get start)

                // *** End programmer edit section *** (Сотрудник.Отчесвто Get start)
                string result = this.fОтчесвто;
                // *** Start programmer edit section *** (Сотрудник.Отчесвто Get end)

                // *** End programmer edit section *** (Сотрудник.Отчесвто Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Отчесвто Set start)

                // *** End programmer edit section *** (Сотрудник.Отчесвто Set start)
                this.fОтчесвто = value;
                // *** Start programmer edit section *** (Сотрудник.Отчесвто Set end)

                // *** End programmer edit section *** (Сотрудник.Отчесвто Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.OtelKursach2.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должность Get start)

                // *** End programmer edit section *** (Сотрудник.Должность Get start)
                IIS.OtelKursach2.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудник.Должность Get end)

                // *** End programmer edit section *** (Сотрудник.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должность Set start)

                // *** End programmer edit section *** (Сотрудник.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудник.Должность Set end)

                // *** End programmer edit section *** (Сотрудник.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.OtelKursach2.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.OtelKursach2.Сотрудник));
                }
            }
        }
    }
}
