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
    /// Отель.
    /// </summary>
    // *** Start programmer edit section *** (Отель CustomAttributes)

    // *** End programmer edit section *** (Отель CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтельE", new string[] {
            "КодОтеля as \'Код отеля\'",
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    [View("ОтельL", new string[] {
            "КодОтеля as \'Код отеля\'",
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    public class Отель : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодОтеля;
        
        private string fНаименование;
        
        private string fАдрес;
        
        // *** Start programmer edit section *** (Отель CustomMembers)

        // *** End programmer edit section *** (Отель CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Отель.Адрес CustomAttributes)

        // *** End programmer edit section *** (Отель.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Отель.Адрес Get start)

                // *** End programmer edit section *** (Отель.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Отель.Адрес Get end)

                // *** End programmer edit section *** (Отель.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отель.Адрес Set start)

                // *** End programmer edit section *** (Отель.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Отель.Адрес Set end)

                // *** End programmer edit section *** (Отель.Адрес Set end)
            }
        }
        
        /// <summary>
        /// КодОтеля.
        /// </summary>
        // *** Start programmer edit section *** (Отель.КодОтеля CustomAttributes)

        // *** End programmer edit section *** (Отель.КодОтеля CustomAttributes)
        public virtual int КодОтеля
        {
            get
            {
                // *** Start programmer edit section *** (Отель.КодОтеля Get start)

                // *** End programmer edit section *** (Отель.КодОтеля Get start)
                int result = this.fКодОтеля;
                // *** Start programmer edit section *** (Отель.КодОтеля Get end)

                // *** End programmer edit section *** (Отель.КодОтеля Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отель.КодОтеля Set start)

                // *** End programmer edit section *** (Отель.КодОтеля Set start)
                this.fКодОтеля = value;
                // *** Start programmer edit section *** (Отель.КодОтеля Set end)

                // *** End programmer edit section *** (Отель.КодОтеля Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Отель.Наименование CustomAttributes)

        // *** End programmer edit section *** (Отель.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Отель.Наименование Get start)

                // *** End programmer edit section *** (Отель.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Отель.Наименование Get end)

                // *** End programmer edit section *** (Отель.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отель.Наименование Set start)

                // *** End programmer edit section *** (Отель.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Отель.Наименование Set end)

                // *** End programmer edit section *** (Отель.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтельE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтельE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтельE", typeof(IIS.OtelKursach2.Отель));
                }
            }
            
            /// <summary>
            /// "ОтельL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтельL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтельL", typeof(IIS.OtelKursach2.Отель));
                }
            }
        }
    }
}
